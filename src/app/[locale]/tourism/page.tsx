import React from "react";
import CampMenu from "./components/CampMenu";
import NewImageScroller from "./components/NewImageScroller";
import { animalImages } from "@/data/camp";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import { BiChalkboard } from "react-icons/bi";
import { FaHiking, FaRegStar, FaWalking, FaRegLemon } from "react-icons/fa";
import { FaTents } from "react-icons/fa6";
import {
  TbHorse,
  TbCookie,
  TbBallVolleyball,
  TbBrush,
  TbBook,
} from "react-icons/tb";
type Props = {};

const TourismPage = (props: Props) => {
  const offers = [
    {
      text: "Lecture on the Khomyn Tal National Park and our takhi reintroduction project",
      icon: <BiChalkboard size={30} className="text-foreground" />,
    },
    {
      text: "Learn to build traditional Ger",
      icon: <FaTents size={30} className="text-foreground" />,
    },
    {
      text: "Hiking to the nearest mountains and riverbank",
      icon: <FaHiking size={30} className="text-foreground" />,
    },
    {
      text: "Stargazing",
      icon: <FaRegStar size={30} className="text-foreground" />,
    },
    {
      text: "Sunrise walk",
      icon: <FaWalking size={30} className="text-foreground" />,
    },
    {
      text: "Horseback and camel riding",
      icon: <TbHorse size={30} className="text-foreground" />,
    },
    {
      text: "Cooking class",
      icon: <TbCookie size={30} className="text-foreground" />,
    },
    {
      text: "Playing sports",
      icon: <TbBallVolleyball size={30} className="text-foreground" />,
    },
    {
      text: "Fruit gathering in the natural sea buckthorn stands – depending on the season",
      icon: <FaRegLemon size={30} className="text-foreground" />,
    },
    {
      text: "Canvas painting",
      icon: <TbBrush size={30} className="text-foreground" />,
    },
    {
      text: "Library service",
      icon: <TbBook size={30} className="text-foreground" />,
    },
  ];
  return (
    <div className="bg-background text-foreground">
      <NewImageScroller />
      <CampMenu page={"camp"} />
      <section className="container">
        <div className="my-16">
          <h1 className="text-2xl font-bold mb-14 text-center">
            Welcome to TAKHI ECO CAMP in
          </h1>
          <p>
            Watching Przewalski&apos;s horses in the vastness of the steppe and
            dunes, seeing Siberian ibex, Mongolian gazelles, Taiga antelopes and
            wolf tracks in the sand, admiring a steppe eagle in the sky: the
            protected reserve in the Seer Mountain,1400 kilometers west of
            Ulaanbaatar, is the ideal place for tourists and Eco volunteers
            wishing to contribute to the protection of the last wild horses with
            the association KTT. A handful of yurts and a building offering
            sanitary facilities, showers, and restaurant, inaugurated in
            September 2022, serve as a base for travelers. You will see the wild
            horses and better understand the importance of protecting them,
            observe fauna and flora in a preserved nature, between steppe,
            dunes, rivers and lakes and meet the nomads who live in the Khomyn
            Tal National Park. An Eco volunteer program is developed, for those
            who wish to actively help the rangers on a daily basis. We look
            forward to welcoming you and sharing with you our passion for
            Przewalski&apos;s horse and the beautiful landscapes of Khomyn tal.
          </p>
        </div>
        <div className="my-16">
          <h1 className="text-2xl font-bold mb-14 text-center">
            Tourism lodge
          </h1>
          <p>
            Watching Przewalski&apos;s horses in the vastness of the steppe and
            dunes, seeing Siberian ibex, Mongolian gazelles, Taiga antelopes and
            wolf tracks in the sand, admiring a steppe eagle in the sky: the
            protected reserve in the Seer Mountain,1400 kilometers west of
            Ulaanbaatar, is the ideal place for tourists and Eco volunteers
            wishing to contribute to the protection of the last wild horses with
            the association KTT. A handful of yurts and a building offering
            sanitary facilities, showers, and restaurant, inaugurated in
            September 2022, serve as a base for travelers. You will see the wild
            horses and better understand the importance of protecting them,
            observe fauna and flora in a preserved nature, between steppe,
            dunes, rivers and lakes and meet the nomads who live in the Khomyn
            Tal National Park. An Eco volunteer program is developed, for those
            who wish to actively help the rangers on a daily basis. We look
            forward to welcoming you and sharing with you our passion for
            Przewalski&apos;s horse and the beautiful landscapes of Khomyn tal.
          </p>
          <p className="mt-10">
            Camp building wooden house with renewable energy supply
            (electricity) with engineering solutions to minimize heat loss.
            There are two dining halls for winter and summer with a total
            capacity of up to 80 people. Our restaurant serves local and
            international food and fresh vegetables from our own greenhouse.
            Vegetarian and vegan kitchen is available upon prior request Our
            sanitary facilities are equipped with water closet and showers;
            sauna is available. Everything is designed with that meet the
            Mongolian standards and are designed with innovative,
            environmentally friendly technologies.  
          </p>

          <PhotoSliderSmall photos={animalImages} />
        </div>
        <div className="my-16">
          <h1 className="text-2xl font-bold mb-14 text-center">
            Mongolian Ger
          </h1>
          <p>
            Takhi eco camp enchants guests with our comfortable traditional gers
            (pronounced ‘gaire’). Thick and warm blankets and furniture carved
            and painted by hand adorn each ger with authentic comfort. Enjoy
            stay in a fully furnished Mongolian home. 
          </p>

          <PhotoSliderSmall photos={animalImages} />
        </div>
        <div className="my-16">
          <h1 className="text-2xl font-bold mb-14 text-center">Dining</h1>
          <h2 className="my-4 text-2xl font-bold">
            &quot;Good food warms the heart and feeds the soul&quot;
          </h2>
          <p>
            We serve fresh vegetables, harvested from our own greenhouse. Dairy
            products are preferably purchased from local nomadic families and
            pasteurized on-site. By tradition, Mongolia’s livestock roams free
            and feasts on a wide variety of grasses. Purchasing local food not
            only assures the best quality, but also provides this remote region
            with opportunities for economic growth through responsible tourism.
            We serve fixed menus include Mongolian specialties—such as buuz
            (meat or vegetable stuffed dumpling) or, tsuivan, a noodle dish
            mixed with meat and vegetables—as well as various international
            dishes. The restaurant can meet all dietary needs with advance
            notice for guests who are Gluten Free, Vegetarian, or Vegan. Staples
            of the Mongolian diet include stewed meats, stone-roasted barbecue,
            dumplings, and hotpot—meat, noodles, and vegetables cooked in a hot
            pot. The traditional foods are hearty and include mutton and beef;
            milk from sheep, cows, and goats; as well as flour from buckwheat,
            wheat, and oats.
          </p>

          <PhotoSliderSmall photos={animalImages} />
        </div>
        <div className="my-16">
          <h1 className="text-2xl font-bold mb-14 text-center">Activities</h1>

          <p>
            We serve fresh vegetables, harvested from our own greenhouse. Dairy
            products are preferably purchased from local nomadic families and
            pasteurized on-site. By tradition, Mongolia’s livestock roams free
            and feasts on a wide variety of grasses. Purchasing local food not
            only assures the best quality, but also provides this remote region
            with opportunities for economic growth through responsible tourism.
            We serve fixed menus include Mongolian specialties—such as buuz
            (meat or vegetable stuffed dumpling) or, tsuivan, a noodle dish
            mixed with meat and vegetables—as well as various international
            dishes. The restaurant can meet all dietary needs with advance
            notice for guests who are Gluten Free, Vegetarian, or Vegan. Staples
            of the Mongolian diet include stewed meats, stone-roasted barbecue,
            dumplings, and hotpot—meat, noodles, and vegetables cooked in a hot
            pot. The traditional foods are hearty and include mutton and beef;
            milk from sheep, cows, and goats; as well as flour from buckwheat,
            wheat, and oats.
          </p>

          <PhotoSliderSmall photos={animalImages} />
        </div>
        <div className="mt-16 pb-10">
          <h1 className="text-2xl font-bold mb-14 text-center">We offer</h1>
          {offers.map((offer, index) => (
            <div
              key={offer.text + index}
              className="flex items-center gap-2 mt-10"
            >
              {offer.icon}
              <p>{offer.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TourismPage;
