import React, { useEffect, useState, useRef } from 'react';
import bibtexParse from 'bibtex-parse-js';
import './SectionStyles.css';

function Research() {
  const [references, setReferences] = useState([]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMyName = (author) => {
    const clean = author.trim().replace(/\s+/g, ' ');
    return clean.includes('Eliot') && clean.includes('Jones');
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlightAndMarkEqualContribution = (authors, equalContributors) => {
    if (!authors) return authors;

    // Split on "and" with any surrounding whitespace (including newlines)
    const authorList = authors.split(/\s+and\s+/i);
    return authorList
      .map((author) => {
        const authorClean = author.trim().replace(/\s+/g, ' ');
        const highlighted = isMyName(authorClean) ? `<strong>${authorClean}</strong>` : authorClean;
        const marked = equalContributors?.includes(authorClean) ? `${highlighted}*` : highlighted;
        return marked;
      })
      .join(', ');
  };

  return (
    <section
      id="research"
      ref={sectionRef}
      className={`section-container ${isVisible ? 'visible' : ''}`}
    >
      <h2>Research</h2>

      <p style={{ maxWidth: '700px', marginBottom: '2.5rem' }}>
        I'm currently interested in measuring the cybersecurity risks posed by leading AI agents.
        While at PleIAs, my research focus was on improving the safety of large language models
        through increased scrutiny of pretraining data.
      </p>

      <h3>Publications</h3>

      {references.length === 0 && (
        <p style={{ color: 'var(--charcoal-muted)', fontStyle: 'italic' }}>
          Loading publications...
        </p>
      )}

      <div className="publications-list">
        {references.map((entry, idx) => {
          const { citationKey, entryTags } = entry;
          const title = entryTags?.title;
          const authors = entryTags?.author
            ? highlightAndMarkEqualContribution(
                entryTags.author,
                entryTags?.equalcontribution?.split(', ')
              )
            : '';
          const year = entryTags?.year;
          const venue = entryTags?.booktitle;
          const url = entryTags?.url;

          return (
            <div
              key={citationKey || idx}
              className="publication-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="publication-number">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="publication-content">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-title"
                  >
                    {title}
                  </a>
                ) : (
                  <div className="publication-title">{title}</div>
                )}

                {authors && (
                  <div
                    className="publication-authors"
                    dangerouslySetInnerHTML={{ __html: authors }}
                  />
                )}

                <div className="publication-meta">
                  {venue && <span className="publication-venue">{venue}</span>}
                  {year && <span className="publication-year">{year}</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Research;
