import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <ul className="text-white-50 text-lg list-disc pl-5 space-y-1">
            {desc.split("\n").map((item, index) => (
              <li key={index}>{item.replace("• ", "")}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;