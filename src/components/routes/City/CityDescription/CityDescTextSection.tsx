import { useAppSelector } from '@store/hooks';
import { useTranslation } from 'react-i18next';
import { highLightType } from 'types/cityComponenType';

function CityDescTextSection() {
  const city = useAppSelector((state) => state.cities.currentCityName);
  const { t } = useTranslation(city);
  const CityDescriptionSection = Object.values(
    t(`${city}.descriptionSection`, {
      returnObjects: true,
    })
  );

  return (
    <div>
      {CityDescriptionSection?.map((section) => {
        return (
          <p key={section.id}>
            <span className="float-start lh-1 fw-bold fs-1 me-1">
              {section.prefix}
            </span>
            {section.text}
            {section.highlights?.map((highlight: highLightType) => (
              <span key={highlight.id} className={highlight.className}>
                {highlight.text}
              </span>
            ))}
            {section.suffix}
            {section.moreHighlights &&
              section.moreHighlights?.map((highlight: highLightType) => (
                <span key={highlight.id} className={highlight.className}>
                  {highlight.text}
                </span>
              ))}
          </p>
        );
      })}
    </div>
  );
}

export default CityDescTextSection;
