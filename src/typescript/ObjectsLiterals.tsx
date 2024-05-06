
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  city: string;
  country: string;
}


export const ObjectsLiterals = () => {

  const person: Person = {
    firstName: 'Daniel Rosas',
    lastName: "",
    age: 23,
    address: {
      city: 'La Paz',
      country: 'México'
    },
    isAlive: true,
  }

  return (
    <>
      <h3>Objetos Literales</h3>
      {JSON.stringify(person, null, 2)}
    </>
  )
}
