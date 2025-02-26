import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsExhibition() {
  const cards = [
    {
      title: "Exhibition1",
      src: "/timeline/Exhibition1.jpg",
    },
    {
      title: "Exhibition2",
      src: "/timeline/Exhibition2.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
