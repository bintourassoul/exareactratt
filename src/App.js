import React from 'react';
import  monimage1 from '././assets/images/monimage1.jpg'
import { FormComponent } from './components/FormComponent';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
  <>

<div className="bg-[#FFFFFF] flex w-[1512px] box-sizing-border">
      <div className="relative flex flex-col items-center w-[1512px] h-[fit-content] box-sizing-border">
        <div className="bg-[#F5F5F5] relative flex flex-col items-center p-[40px_0_167px_0] w-[1512px] box-sizing-border">
          <div className="m-[0_0.1px_134px_0] flex flex-row justify-between w-[1206.9px] box-sizing-border">
            <div className="relative p-[1px_0_0_0] w-[91.8px] box-sizing-border">
              <div className="rounded-[43px] bg-[#024089] relative p-[14.7px_6.8px_13.4px_6.8px] box-sizing-border">
                <span className="font-normal text-[48px] text-[#FFFFFF]">
                  R
                </span>
              </div>
              <span className="border-[1px_solid_#FFFFFF] text-[48px] rotate-[15.303deg] absolute top-[25px] right-[25px]">
                D
              </span>
             
            </div>
            <div className="m-[32px_0px_32px_0] flex flex-row justify-between w-[513.9px] h-[fit-content] box-sizing-border">
              <span className="m-[0_11.5px_0_0] w-[49px]  font-normal text-[14px] text-[#2F2F2F]">
                Accueil
              </span>
              <span className=" font-normal text-[14px] text-[#2F2F2F]">
                A propos
              </span>
              <span className=" font-normal text-[14px] text-[#2F2F2F]">
                Portfolio
              </span>
              <span className=" font-normal text-[14px] text-[#2F2F2F]">
                Services
              </span>
              <span className="font-normal text-[14px] text-[#2F2F2F]">
                Expériences
              </span>
            </div>
          </div>
        
          <div className="flex flex-row justify-between w-[1207px] box-sizing-border">
            <div className="flex flex-col box-sizing-border">
              <span className="font-normal text-[64px] text-[#2F2F2F]">
              RAMATOULAYE DIOUF
              </span>
              <span className="m-[0_1px_0_1px] self-startfont-normal text-[40px] text-[#2F2F2F]">
                Full Stack Developper
              </span>
            </div>
            <div className="rounded-[140px] border-[1px_solid_#024089] relative m-[26px_0_26px_0] flex p-[46px_0.4px_46px_0] w-[387px] h-[fit-content] box-sizing-border">
              <span className="font-bold text-[32px] leading-[0.875] text-[#024089]">
                CONTACTEZ-MOI
              </span>
            </div> 
          </div>
          </div>
          <div className="bg-[#FFFFFF] relative flex flex-row p-[107px_0_165px_0] w-[1512px] box-sizing-border">
          <div className="m-[0_169px_0_0] flex flex-col box-sizing-border">
            <div className="m-[0_0_23px_0] inline-block self-start font-normal text-[24px] text-[#024089]">
              A propos
            </div>
            <div className="m-[0_3.2px_9px_0] inline-block font-normal text-[14px] leading-[2] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat exercitation ullamco laboris exercitation ullamco laboris<br />
              <br />
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat exercitation ullamco laboris exercitation ullamco laboris
            </div>
            <div className="rounded-[12px] bg-[#024089] relative flex p-[16px_2.6px_16px_0] w-[623px] box-sizing-border">
              <span className="m-auto font-bold text-[14px] leading-[2] text-[#FFFFFF]">
                Télécharger mon CV
              </span>
            </div>
          </div>
          <img src={ monimage1 } className="w-[415px] h-[328px]" alt='' />
        </div>
        
        <div className="bg-[#FFFFFF] relative m-[0_0_772px_0] flex flex-col items-center p-[107px_0_155px_0] w-[1512px] box-sizing-border">
          <div className="m-[0_1104px_14px_0] inline-block font-normal text-[24px] text-[#024089]">
            Portfolio
          </div>
          <div className="rounded-[12px] bg-[#F5F5F5] relative m-[0_0_107px_0] flex flex-row justify-between p-[6px_83.3px_6px_0] w-[1207px] box-sizing-border">
            <span className="m-[0_14px_0_0] w-[125px] font-bold text-[14px] leading-[2] text-[#024089]">
              Application mobile
            </span>
            <span className=" font-bold text-[14px] leading-[2] text-[#2F2F2F]">
              Site web
            </span>
            <span className="font-bold text-[14px] leading-[2] text-[#2F2F2F]">
              Modélisation
            </span>
            </div>
          <div className="relative flex box-sizing-border">
            <div className="relative flex flex-row box-sizing-border">
              <div className="m-[0_169.9px_31px_0] flex flex-col box-sizing-border">
                <div className="m-[0_0_14px_0] inline-block self-start font-normal text-[24px] leading-[1.167] text-[#2F2F2F]">
                  Projet 
                </div>
                <div className="m-[0_0_14px_0] inline-block self-start font-normal text-[14px] leading-[2] text-[#2F2F2F]">
                  Application pour pharmacie de garde
                </div>
                <span className="relative  font-light text-[14px] leading-[2] text-[#2F2F2F]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat exercitation ullamco laboris exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </span>
              </div>
              <div className="rounded-[16px] border-[1px_solid_#024089] relative flex flex-row p-[7px_18px_7px_17px] w-[528px] box-sizing-border">
                <div className="bg-[url('assets/images/AccueilP1.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[46px_29px_0_0] w-[145px] h-[251px]">
                </div>
                <div className="bg-[url('assets/images/ConnexionP1.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_29px_46px_0] w-[145px] h-[251px]">
                </div>
                <div className="bg-[url('assets/images/TableauDeBordP1.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[47px_0_0_0] w-[145px] h-[250px]">
                </div>
              </div>
            </div>
            <div className="rounded-[12px] bg-[#024089] absolute left-[0px] bottom-[0px] flex flex-row justify-between p-[6px_28.3px_6px_0] w-[523px] box-sizing-border">
              <span className="m-[0_14px_0_0] w-[57px] break-words font-['Gothic_A1'] font-bold text-[14px] leading-[2] text-[#FFFFFF]">
                voir plus
              </span>
              <div className="m-[10px_0_10px_0] flex w-[16px] h-[16px] box-sizing-border">
                <img className="w-[11.3px] h-[8.1px]" alt=""/>
              </div>
            </div>
            </div>
            </div>
         
        
    <div className="bg-[#F6FBFF] absolute left-[0px] right-[0px] bottom-[1475px] flex flex-col items-center h-[774px]">
    <div className="m-[0_1025.7px_56px_0] inline-block  font-normal text-[24px] leading-[1.167] text-[#024089]">
      Services
    </div>
      <div className="m-[0_0_49px_81px] flex flex-row w-[fit-content] box-sizing-border">
      <div className="rounded-[12px] bg-[#FFFFFF] relative m-[0_44px_0_0] flex flex-row p-[30px_0_29px_43px] box-sizing-border">
        <div className="m-[7px_42px_7px_0] flex flex-col box-sizing-border">
          <div className="m-[0_0_21px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
            <div className="bg-[url('assets/images/UserAvatar11.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_11px_4px_0] w-[24px] h-[24px]">
            </div>
            <span className="font-normal text-[24px] leading-[1.167] text-[#2F2F2F]">
              Développement Application
            </span>
          </div>
          <span className="font-normal text-[14px] leading-[2] text-[#2F2F2F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          </span>
        </div>
        <div className="rounded-l-[12px] bg-[#024089] w-[10px] h-[147px]">
        </div>
      </div>
      <div className="rounded-[12px] bg-[#FFFFFF] relative flex flex-row p-[30px_1px_29px_42px] box-sizing-border">
        <div className="m-[7px_42px_7px_0] flex flex-col box-sizing-border">
          <div className="m-[0_0_21px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
            <div className="bg-[url('assets/images/ProgrammingLanguage1.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_11px_4px_0] w-[24px] h-[24px]">
            </div>
            <span className="font-normal text-[24px] leading-[1.167] text-[#2F2F2F]">
              Programmation langages
            </span>
          </div>
          <span className=" font-normal text-[14px] leading-[2] text-[#2F2F2F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          </span>
        </div>
        <div className="rounded-l-[12px] bg-[#024089] w-[10px] h-[147px]">
        </div>
      </div>
    </div>
    <div className="m-[0_0_0_81px] flex flex-row w-[fit-content] box-sizing-border">
      <div className="rounded-[12px] bg-[#FFFFFF] relative m-[0_44px_0_0] flex flex-row p-[29px_0_28px_43px] box-sizing-border">
        <div className="m-[7px_42px_7px_0] flex flex-col box-sizing-border">
          <div className="m-[0_0_21px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
            <div className="bg-[url('assets/images/Framework1.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[2px_11px_2px_0] w-[24px] h-[24px]">
            </div>
            <span className="font-normal text-[24px] leading-[1.167] text-[#2F2F2F]">
              Modélisation
            </span>
          </div>
          <span className="font-normal text-[14px] leading-[2] text-[#2F2F2F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          </span>
        </div>
        <div className="rounded-l-[12px] bg-[#024089] w-[10px] h-[147px]">
        </div>
      </div>
      <div className="rounded-[12px] bg-[#FFFFFF] relative flex flex-row p-[29px_1px_28px_42px] box-sizing-border">
        <div className="m-[7px_42px_7px_0] flex flex-col box-sizing-border">
          <div className="m-[0_0_21px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
            <div className="bg-[url('assets/images/VideoPlayer1.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[2px_11px_2px_0] w-[24px] h-[24px]">
            </div>
            <span className=" font-normal text-[24px] leading-[1.167] text-[#2F2F2F]">
              Création vidéo
            </span>
          </div>
          <span className="font-normal text-[14px] leading-[2] text-[#2F2F2F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          </span>
        </div>
        <div className="rounded-l-[12px] bg-[#024089] w-[10px] h-[147px]">
    </div>
  </div>
    </div>
    </div>
    </div>
    </div> 
    <div className="bg-[#FFFFFF] relative flex flex-col items-center p-[109px_0_181px_0] w-[1512px] box-sizing-border">
          <div className="m-[0_982.8px_56px_0] inline-block font-normal text-[24px] text-[#024089]">
            Expériences
          </div>
          <div className="m-[0_0_29px_81px] flex flex-row justify-between w-[1044px] box-sizing-border">
            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[url('assets/images/Html511.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[90px] h-[90px]">
            </div>
            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[url('assets/images/NodeJs1.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[90px] h-[90px]">
            </div>
            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[url('assets/images/Js1.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[90px] h-[90px]">
            </div>
            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[url('assets/images/Css31.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[90px] h-[90px]">
            </div>
          </div>
          <div className="m-[0_0_60px_74.6px] flex flex-row justify-between w-[987.6px] box-sizing-border">
            <span className="m-[0_9px_0_0] w-[40px]  font-bold text-[14px] text-[#2F2F2F]">
              HTML
            </span>
            <span className="font-bold text-[14px] text-[#2F2F2F]">
              Node.JS
            </span>
            <span className="font-bold text-[14px] text-[#2F2F2F]">
              JavaScript
            </span>
            <span className=" font-bold text-[14px] text-[#2F2F2F]">
              CSS
            </span>
          </div>
          <div className="m-[0_0_29px_81px] flex flex-row justify-between w-[1044px] box-sizing-border">
            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[url('assets/images/Atom1.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[90px] h-[90px]">
            </div>
            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[url('assets/images/Java11.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[90px] h-[90px]">
            </div>
            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[url('assets/images/Social1.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[90px] h-[90px]">
            </div>
            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[url('assets/images/Python1.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[90px] h-[90px]">
            </div>
          </div>
          <div className="m-[0_0_0_74.4px] flex flex-row justify-between w-[1007.4px] box-sizing-border">
            <span className="m-[0_9px_0_0] w-[61px] break-words font-['Gothic_A1'] font-bold text-[14px] text-[#2F2F2F]">
              React.JS
            </span>
            <span className="font-bold text-[14px] text-[#2F2F2F]">
              Java
            </span>
            <span className=" font-bold text-[14px] text-[#2F2F2F]">
              AWS
            </span>
            <span className=" font-bold text-[14px] text-[#2F2F2F]">
              Python
            </span>
          </div>
        </div>
        <div className="bg-[#F5F5F5] relative flex p-[107px_0_0_0] w-[1512px] box-sizing-border">
          <div className="relative flex flex-col items-center w-[1512px] h-[fit-content] box-sizing-border">
            <div className="m-[0_1112.2px_56px_0] inline-block  font-normal text-[24px] leading-[1.167] text-[#024089]">
              Contact
            </div>
            <div className="m-[0_0_86px_1px] flex flex-row w-[fit-content] box-sizing-border">
              <div className="m-[0_337.6px_99px_0] flex flex-col box-sizing-border">
                <div className="m-[0_0_22px_0] inline-block self-start  font-bold text-[24px] leading-[1.167] text-[#2F2F2F]">
                  Envoyez-moi un message
                </div>
                <div className="m-[0_0_55px_0] inline-block break-words font-['Gothic_A1'] font-light text-[14px] leading-[2] text-[#2F2F2F]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                </div>
                <div className="m-[0_2px_28px_2px] flex flex-row self-start w-[fit-content] box-sizing-border">
                  <div className="m-[3px_19px_5px_0] flex w-[24px] h-[24px] box-sizing-border">
                    <img className="w-[20px] h-[20px]" alt=''/>
                  </div>
                  <span className="font-normal text-[14px] leading-[2] text-[#2F2F2F]">
                    +221 77 000 00 00
                  </span>
                </div>
                <div className="m-[0_2px_28px_2px] flex flex-row self-start w-[fit-content] box-sizing-border">
                  <div className="m-[5.5px_22px_5.5px_0] flex w-[24px] h-[24px] box-sizing-border">
                    <img className="w-[20px] h-[17px]" alt='' />
                  </div>
                  <span className="font-normal text-[14px] leading-[2] text-[#2F2F2F]">
                    rd99@gmail.com
                  </span>
                </div>
                <div className="m-[0_3.1px_0_3.1px] flex flex-row self-start w-[fit-content] box-sizing-border">
                  <div className="m-[3.8px_20.1px_3.8px_0] flex w-[24px] h-[24px] box-sizing-border">
                    <img className="w-[17.7px] h-[20.5px]" alt='' />
                  </div>
                  <span className="font-normal text-[14px] leading-[2] text-[#2F2F2F]">
                    keur massar , Villa N° 71 Est DAKAR
                  </span>
                </div>
              </div>
        
            </div>
                 
                  <BrowserRouter>
                  <Routes>
                  <Route path="/form" element={<FormComponent />} />

                  </Routes>
                  </BrowserRouter>
     </div>
     </div>
     
     <FormComponent/> 
  </>
  
)
}
export default App;