import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRef, useMemo, memo } from "react";
import { copyRight } from "./copyRight";

interface ListProps {
  showCake: boolean;
  triggerRerender: number;
}

const menu = ["Soup", "Salad", "Noodle", "Pizza", "Burger", "Cake"];

export const List = ({ showCake, triggerRerender }: ListProps) => {
  const listRef = useRef(null);

  console.log("Rerender", triggerRerender);

  const filteredFood = useMemo(() => {
    console.log("filteredFood");
    return menu.filter((item) => item !== "Cake" || showCake);
  }, [showCake]);

  const handleClick = () => {
    if (listRef.current) {
      console.log((listRef.current as HTMLElement).getBoundingClientRect());
      const { y } = (listRef.current as HTMLElement).getBoundingClientRect();
      window.scrollTo(0, y);
    }
  };

  return (
    <>
      <div ref={listRef}>
        {filteredFood.map((item) => (
          <div className="food-item" key={item}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`images/${item.toLowerCase()}.jpg`}
                alt="pizza"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item}
                </Typography>
                <Typography component="div">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: copyRight[item.toLowerCase()],
                    }}
                  ></div>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Order</Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
      <Button onClick={handleClick}>Go to top</Button>
      <ListChild />
    </>
  );
};

const ListChild = memo(() => {
  console.log("ListChild render");
  return <div>ListChild</div>;
});
