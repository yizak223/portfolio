import paratropers from '../../assets/paratropers/image.png'

export default function MiltaryService() {
  return (
    <section id="MilitaryService" className="h-95 flex justify-center">
      <div className='h-full text-white flex flex-col gap-4 justify-center'>
        <h2 className="text-2xl text-white font-bold border-b-4 self-center border-purple-400 w-fit">Miltary Service</h2>
        <div className=' flex gap-9 justify-center items-center'>
          <div className='leading-loose text-blueText'>
            <p className="text-sm text-white">I served as  </p>
            <p className='text-5xl text-blueText'>a combat medic</p>
            <p className='mb-7'>in the paratrooper brigade.</p>
            <p className='w-31 leading-6'>
              <span className="list-item">I excelled as a team honoree at the end of the track.</span>
              <span className="list-item">  I worked under pressure, both individually and within the team, and was
                also responsible for the technology aspect that included operating drones.</span>

            </p>
          </div>
          <img className=' drop-shadow-2xl object-contain size-64  ' src={paratropers} alt="me" />
        </div>
      </div>
    </section>
  )
}
