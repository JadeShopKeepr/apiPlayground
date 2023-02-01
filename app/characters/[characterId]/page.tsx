async function getCharacter(){
   const res = await fetch('https://rickandmortyapi.com/api/character/1');
   return res.json();
}


function sleep(ms: number){
   return new Promise(resolve => setTimeout(resolve, ms));
}

const CharacterPage = async () => {
 
   const character = await getCharacter();
   await sleep(2000)
  return (
    <section>
      <h1 className='font-bold underline bg-[#007CC7] '>{character.name}</h1>
    </section>
  );
};
export default CharacterPage;
