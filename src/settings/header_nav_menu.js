import { HomeIcon, GoodsIcon, StarIcon, OrdersIcon, ConfirmOrderIcon } from 'components/Icons'

export const headerNavMenu = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    icon: <HomeIcon />
  },
  {
    id: 2,
    title: "Заказы",
    path: "/orders",
    icon: <OrdersIcon />
  },
  {
    id: 3,
    title: "Товары",
    path: "/goods",
    icon: <GoodsIcon />
  },
  {
    id: 4,
    title: "Отзывы",
    path: "/reviews",
    icon: <StarIcon />
  },
  {
    id: 5,
    title: "Оформить заказ",
    path: "/confirm-order",
    icon: <ConfirmOrderIcon />
  },
];
