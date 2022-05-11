type UserProps = {
  name: string;
  age: number;
  sex: string;
}

type keysOfUser = keyof UserProps;
// type keysOfUser2 = 'name' | 'age' | 'sex';

function TestUser() {
  let key: keysOfUser = 'name';
  console.log(key);
  return <>
    {key}
  </>;
}

export default TestUser;