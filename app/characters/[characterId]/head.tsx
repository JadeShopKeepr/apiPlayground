async function getCharacter(){
   const res = await fetch('https://rickandmortyapi.com/api/character/1');
   return res.json();
}

export default async function Head() {
   const character = await getCharacter();
   return (
     <>
       <title>{character.name}</title>
       <meta content='width=device-width, initial-scale=1' name='viewport' />
       <meta name='description' content='Generated by create next app' />
       <link rel='icon' href='/favicon.ico' />
     </>
   );
 }