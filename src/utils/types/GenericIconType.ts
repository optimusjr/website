interface MyProps<T extends React.ElementType> {
  as?: T;
}

export type Props<T extends React.ElementType> = MyProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof MyProps<T>>;
