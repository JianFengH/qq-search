import React from 'react';

type UserProps = {
  name: string;
  age: number;
  sex: 'male' | 'female';
}

type keysOfUser = keyof UserProps; // keyof: get keys of UserProps
type keysOfUser2 = 'name' | 'age' | 'sex';

function TestUser() {
  let key: keysOfUser = 'name';
  console.log(key);
  return <>
    {key}
  </>;
}

type AppProps = {
  dict1: {
    [key: string]: string
  }
  dict2: Record<string, string>

  onClick(e: React.MouseEvent<HTMLButtonElement>): void
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

declare interface AppBetterProps {
  children: React.ReactNode;
  style: React.CSSProperties;
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
}

function AppBetter({ children, onClick }: AppBetterProps) {
  return <>
    {children}
    <button onClick={onClick}>click</button>
  </>;
}

const App: React.FC<{}> = () => [1, 2, 3] as any;

const ref1 = React.useRef<HTMLInputElement>(null);

const handleChange = React.useCallback<
  React.ChangeEventHandler<HTMLInputElement>
>(evt => {
  console.log(evt.target.value)
}, []);

type Props<T> = {
  name: T;
  name2?: T;
}

function foo() {
  return { baz: 1 }
}

type FooReturn = ReturnType<typeof foo>; // typeof: get type of object

type NewUser = Partial<UserProps>;

type UserWithoutSex = Omit<UserProps, 'sex' | 'age'>

type UserWithNameAndAge = Pick<UserProps, 'name' | 'age'>;

type Names = 'USA' | 'CHINA' | 'JAP'
interface country { name: string; space: number }
type Countries = Record<Names, country>;


const App2: React.FC = () => {
  const [state, setState] = React.useState('')
  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setState(e.currentTarget.value)
  }
  return (
    <div>
      <input type="text" value={state} onChange={onChange} />
    </div>
  )
}

type ReadOnlyType<T> = {
  readonly [P in keyof T]?: T[P];
}

type ReadOnlyUserProps = ReadOnlyType<UserProps>;

function sayHello(name: string | undefined) {
  let sname: string = name!;
}

const isNumber = (val: unknown): val is number => typeof val === 'number';

const objectToString = Object.prototype.toString
const toTypeString = (value: unknown): string => objectToString.call(value)
const isPlainObject = (val: unknown): val is object => toTypeString(val) === '[object Object]'

type UserProps2 = UserProps & { email: string };
const userWithEmail: UserProps2 = {
  name: '',
  age: 18,
  sex: 'male',
  email: '',
}

export default TestUser;