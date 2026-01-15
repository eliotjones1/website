import React, { useEffect, useState } from 'react';
import bibtexParse from 'bibtex-parse-js';

function Research() {
  const [references, setReferences] = useState([]);
  const myName = "Eliot Jones"; // Your name to be bolded

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/assets/bibliography/refs.bib`)
      .then(response => response.text())
      .then(bibFile => {
        const parsed = bibtexParse.toJSON(bibFile);
        setReferences(parsed);
      })
      .catch(error => {
        console.error('Error fetching or parsing .bib file:', error);
      });
  }, []);

  const highlightAndMarkEqualContribution = (authors, equalContributors) => {
    if (!authors) return authors;

    // First clean up the entire authors string and normalize whitespace
    const cleanedAuthors = authors.replace(/\s+/g, ' ').trim();
    
    // Split by ' and ' but also handle cases where there might be commas
    const authorList = cleanedAuthors.split(/\s+and\s+/);
    
    return authorList
      .map((author) => {
        // Clean up author name and remove trailing commas
        const cleanAuthor = author.trim().replace(/,$/, '');
        
        // Highlight the user's name (check for multiple variations)
        const isMyName = cleanAuthor === myName || 
                        cleanAuthor === "Eliot Krzysztof Jones" || 
                        cleanAuthor === "Eliot Krzystof Jones"; // Handle misspelling in bib file
        const highlighted = isMyName ? `<strong>${cleanAuthor}</strong>` : cleanAuthor;

        // Add an asterisk if the author is an equal contributor
        const marked = equalContributors?.includes(cleanAuthor) ? `${highlighted}*` : highlighted;

        return marked;
      })
      .join(', '); // Join authors back with commas
  };

  return (
    <div style={{ margin: 'auto', }}>
      <h2 style={{ marginBottom: '1rem' }}>Research</h2>
      <div>
        <p style={{
          marginBottom: '1.5rem',
          lineHeight: '1.6',
          fontSize: '1.1rem',
        }}>
          I'm currently interested in measuring the cybersecurity risks posed by leading AI agents.
          While at PleIAs, my research focus was on improving the safety of large language models through increased scrutiny of pretraining data.
        </p>
      </div>
      <h3>Publications</h3>
      {references.length === 0 && <p>Loading references...</p>}

      {references.map((entry, idx) => {
        const { citationKey, entryTags } = entry;
        const title = entryTags?.title;
        const authors = entryTags?.author ? highlightAndMarkEqualContribution(entryTags.author, entryTags?.equalcontribution?.split(', ')) : '';
        const year = entryTags?.year;
        const venue = entryTags?.booktitle;
        const url = entryTags?.url;

        return (
          <div
            key={citationKey || idx}
            style={{ marginBottom: '2rem' }}
          >
            {/* Title in bold */}
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              {title}
            </div>

            {/* Authors in italic */}
            {authors && (
              <div
                style={{ fontStyle: 'italic', margin: '0.4rem 0' }}
                dangerouslySetInnerHTML={{ __html: authors }}
              />
            )}

            {/* Venue and Year */}
            <div style={{ color: '#555', marginTop: '0.4rem' }}>
              {venue && <span><strong>Venue:</strong> {venue} </span>}
              {year && <span><strong>Year:</strong> {year}</span>}
            </div>

            {/* Preprint Link */}
            {url && (
              <div style={{ marginTop: '0.4rem' }}>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#007acc',
                    textDecoration: 'none',
                    fontSize: '0.95rem'
                  }}
                >
                  [Paper]
                </a>
              </div>
            )}

          </div>
        );
      })}

      <hr style={{
        border: 'none',
        borderTop: '1px solid #ccc',
        margin: '2rem 0',
      }} />
    </div>
  );
}

export default Research;

