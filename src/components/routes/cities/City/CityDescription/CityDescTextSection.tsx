import {
  highLightType,
  AccordionSectionPropType,
} from 'types/cityComponenType';

function CityDescTextSection({ t, city }: AccordionSectionPropType) {
  const CityDescriptionSection = Object.values(
    t(`${city}.descriptionSection`, {
      returnObjects: true,
    })
  );

  return (
    <>
      {CityDescriptionSection.map((section) => {
        return (
          <p key={section.id}>
            <span className="float-start lh-1 fw-bold fs-1 me-1">
              {section.prefix}
            </span>
            {section.text}
            {section.highlights.map((highlight: highLightType) => (
              <span key={highlight.id} className={highlight.className}>
                {highlight.text}
              </span>
            ))}
            {section.suffix}
            {section.moreHighlights &&
              section.moreHighlights.map((highlight: highLightType) => (
                <span key={highlight.id} className={highlight.className}>
                  {highlight.text}
                </span>
              ))}
          </p>
        );
      })}
    </>
  );
}

export default CityDescTextSection;
