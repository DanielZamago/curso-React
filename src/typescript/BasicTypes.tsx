
export const BasicTypes = () => {

    const name:string = 'Daniel';
    const age:number = 23;
    const isActive:boolean = true;
    const powers: string[] = ['Velocidad', 'Volar', 'Super Fuerza'];

    powers.push('Invisibilidad');

  return (
    <>
     <h3>Tipos básicos</h3>

     {name} {age} {isActive ? 'Activo' : 'Inactivo'} 
     <br />
     {powers.join(', ')}
     
    </>
  )
}

