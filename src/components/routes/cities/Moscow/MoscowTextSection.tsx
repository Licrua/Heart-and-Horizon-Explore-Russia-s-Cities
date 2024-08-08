import MoscowDescriptionSection from '@utils/MoscowDescription';

function MoscowTextSection() {
  console.log('MoscowDescriptionSection', MoscowDescriptionSection);

  return (
    <>
      {MoscowDescriptionSection.map((section) => (
        <p key={section.id}>
          <span className="float-start lh-1 fw-bold fs-1 me-1">
            {section.prefix}
          </span>
          {section.text}
          {section.highlights.map((highlight) => (
            <span key={highlight.id} className={highlight.className}>
              {highlight.text},
            </span>
          ))}
          {section.suffix}
          {section.moreHighlights &&
            section.moreHighlights.map((highlight) => (
              <span key={highlight.id} className={highlight.className}>
                {highlight.text}
                {highlight.text.endsWith('ина') ? '.' : ','}
              </span>
            ))}
        </p>
      ))}
    </>
  );
}

export default MoscowTextSection;
