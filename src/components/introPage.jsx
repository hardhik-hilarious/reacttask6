import myProfile from '../img/myProfile.jpg'
import { BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

const IntroPage = () => {
    return (
        <section className=' flex justify-center flex-col md:flex-row items-center h-[92vh] text-white gap-10 md:gap-96 ' id='home'>
            <div className=' flex flex-col gap-2'>
                <div className='px-2 py-1'>
                    <h1 className='text-base text-slate-400'>Hi,I am</h1>
                    <h1 className='text-4xl'>Hardhik M</h1>
                    <p className='font-bold'><span className='text-green-600'>FullStack Dev</span> || <span className='text-green-400'>UI/UX</span>  || <span className='text-green-600'>Gamer</span></p>
                </div>
                <div className='flex w-full justify-between items-center px-4 group'>
                    <a href='#'><BiLogoTwitter style={{ fontSize: '18px' }} /></a>
                    <a href='https://www.linkedin.com/in/achanduroyal/'><BiLogoLinkedin style={{ fontSize: '18px' }} /></a>
                    <a href='https://github.com/ChanduRoyalA'><AiFillGithub style={{ fontSize: '18px' }} /></a>
                </div>
            </div>
            <div className='bg-red-100 rounded-full overflow-hidden h-60 w-60 flex justify-center items-center'>
                <img src="https://lh3.googleusercontent.com/pw/ADCreHeCG1MQLQSIJy_O2cnfEhS2ZdhU4IEjLUwmirV6efIGEFQFGvOdqGBwdmY1ErlcgMGYaOWfBKRLpBPmcPBJUFYmDjHqwndLhtlEK53xxK87h8h8rV0-cGmVhljJ8ytWyNgtGMPSaF67Sq2S78gNQCfVQb4IosnvpWUDkaKNFhJLGK4gEir0h0waMAhsQ0_YNB1YMqklQ4SSz1CJJHYiAdMCv3P4pg5ZKqVnx7VVEu6uHNnngfJCEsgMfvG72-ZS3ByEn6vLTaOdjp4hNHGfF63POYA6ds6WYxIpTOl4osSRFEP9zMasxXlF-eQbGTkfI-6ugaVT0UVhHPMkJrYf8zIzLUJJ9IAsJ7_1LuvhivN8DGZu6a6mLXaEkL80_feliqypIJd9erFSemwTQRD_DpqAoU7PB3PYRt9mVcfgYOUMrw9q1KyDDh_Lg4FEABctos7SqACZc6ebL2wpHJjZW8NsbEW-UBpWx0UJz1hg2EIm9-bPca0P8lwSqxCELFucJqVzuKhH_XbtQKDZWIQTzswXw1Xi1xFwLhkeNkuFvWkhcPiGtvBvf1Zt5lkfaU_SN9seBziFOLZJj4k1N5pdsruJtBj_tjVnW7OTiWueVmGr9eB2P1yC0DDxMKhOuchb_dUTCs8dhBYUSAI9sww-bq429SFJJd0R04B2Ls-G4swNupzOmQVff4FoVa6q7TSMqQmwfZHgy4i3lwRep8hkV8zlBahP0PJqfysrsmdIuJ9yabZZkzokEorPbvCG1kmp_w92CPmMy-n53ubC68xGURukCiHKtVTAjthTTG8Ix536plZ7azemLTONwNMLDVMl7yumGAoGzbl_9tB2NC0RVf14pqS0ur4EWambxIF58CCP1ZE1L6SBdzcwgoEfu8I82flRE1VpSRCmyXDfZZAwDM3TGLi9rVNinaI9ghC48RWIihX1KOn_cJ2-3ZOQE_ERlkSJdB_SVQLq60WqAq2GmlWAhDkM8Q=w659-h878-s-no-gm?authuser=2" />
            </div>
        </section>
    )
}

export default IntroPage
