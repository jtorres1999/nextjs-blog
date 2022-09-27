import Image from 'next/image'
import Fondo from '../../public/img/fondo.webp'

import Button from 'react-bootstrap/Button';
function Landing1({databases}) {
    return (
      <>
      <div id="fondo">
      <Image src={Fondo} height={850} alt="No encopntrada" />
        <div className='box'>
          <Button variant="outline-warning" className='btn_inicio'>Mas información</Button>{' '}
        </div>
        {/* <div>
          {
            databases.map(datas => (
              <div >
                <h4>{datas.name}</h4>
              </div>
            ))
          }
        </div> */}
         <style jsx>{`
         .box{
          position: absolute;
          top: 50%;
          left: 44%;
        }
        .btn_inicio{
            animation:  2s infinite linear;
            border-radius: 40px;

        }
         `}</style>
      </div>
       </>
  );
}

export default Landing1;
export const GetServerSideProps = async (context)=>{
  const res= await fetch ("https://swapi.dev/api/people/?format=json")
  const data = await res.json();
  return {
    props:{
      databases : data
    }
  }
  
}