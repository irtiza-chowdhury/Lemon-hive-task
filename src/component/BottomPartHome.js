/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

import React from "react";
import Image from "next/image";
import brush from "../assets/images/Brush.png";
import Image01 from "../assets/images/Image01.png";
import Image02 from "../assets/images/Image02.png";
import Image03 from "../assets/images/Image03.png";
import Image04 from "../assets/images/Image04.png";
import Image05 from "../assets/images/Image05.png";

export default function () {
  return (
    <>
      <div className="outer hidden md:flex homepage__lowerPart min-w-full ">
       <div className="inner">
        <div className="homepage__lowerPart-contents bg-white mx-auto pt-[70px] px-[10px] pb-[60px] w-[90%]">
          <div className="homepage__lowerPart-title flex justify-center relative w-10/12 md:w-8/12 lg:w-7/12  mx-auto min-h-fit">
            <div className="homepage__lowerPart-title-background absolute top-[-10px] xl:top-[-22px] 2xl:top-[-32px] left-0 w-full h-full laptop:h-[80%]">
              <Image
                className="w-full min-h-full extra:w-[90%] mx-auto"
                src={brush}
                alt="title background"
              />
            </div>
            <span className="text-center text-xl font-bold text-blue">
              Ash & Pikachu Arrive in Pokémon Universe
            </span>
          </div>
          <div className="homepage__lowerPart-contents-details mt-[60px] block laptop:flex justify-center laptop:columns-2 gap-x-[10px] ">
            <div className="homepage__lowerPart-contents-details-left gap-x-[10px] w-[100%] laptop:w-[58%] ">
              <div className="left-top flex columns-2 gap-[10px]">
                <div className="left-top-texts w-[83%] lg:w-[85%] laptop:w-[68%] extra:w-[73%] 2xl:w-[77%] gap-[10px]">
                  <div className="homepage-paragraph w-full">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum facilis dolore doloribus ea obcaecati est commodi
                    fugit! Nulla blanditiis obcaecati voluptatem facere eveniet,
                    laudantium amet, beatae tempore incidunt sunt doloribus!
                  </div>
                  <div className="flex columns-2 mt-[10px] gap-[10px]">
                    <div className="homepage-paragraph w-[78%] lg:w-[80%] laptop:w-[54%] extra:w-[61%] 2xl:w-[70%]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit laborum cumque adipisci, fugit consequatur minima
                      accusamus rem? Fugit minus officia dicta sapiente ipsam
                      eum quaerat, voluptatum est amet nemo suscipit! Lorem
                      ipsum dolor sit, amet consectetur adipisicing elit.
                      Dignissimos nihil minus quibusdam inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempora ad reprehenderit nostrum porro provident eaque sapiente magni, mollitia asperiores?
                    </div>
                    <div className="homepage-pokemon-image pt-[5px]">
                      <Image
                        className="h-full w-full"
                        src={Image04}
                        alt="image pokemon"
                      />
                    </div>
                  </div>
                  <div className="homepage-paragraph mt-[10px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum ipsum vero, facere aspernatur aliquid esse unde
                    molestias.  Nobis
                    maiores cumque doloremque enim, necessitatibus adipisci nam
                    praesentium ea deserunt quasi Lorem ipsum dolor conctetur elit?<span><span className="laptop:hidden 2xl:inline">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae, omnis sapiente modi rem mollitia,
                    natus nihil minima quo, pariatur quasi molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto voluptates iste eligendi cumque. Ratione perferendis tempora, officia placeat odit qui vero.</span> </span> 
                  </div>
                </div>
                <div className="left-top-images homepage-pokemon-image  pt-[5px]">
                  <div className="w-full">
                    <Image
                      className="w-full h-full"
                      src={Image03}
                      alt="pokemon"
                    />
                  </div>
                  <div className="w-full mt-[10px]">
                    <Image
                      className="w-full h-full"
                      src={Image02}
                      alt="pokemon"
                    />
                  </div>
                </div>
              </div>
              <div className="homepage-paragraph--updated mt-[20px] ">
                At a enim parturient id. Suspendisse ullamcorper fermentum
                accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
                etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
                Vulputate sit phasellus proin eget arcu. Enim nec ante velit
                erat nibh nunc amet. Tellus at sit imperdiet non. Cras dictum
                curabitur urna mauris in. Ut dui odio sagittis ut imperdiet
                ultricies mauris ac. A sit id etiam vitae non posuere tristique.
                Morbi sit mi sed nam amet tristique tellus. Sed quam aliquam
                pharetra nunc ipsum mattis. Volutpat pellentesque cras euismod
                habitant sit nibh. Dictum odio at aliquam sed. Orci odio lacinia
                id sem sed suspendisse mi fringilla purus. Quis sed ultricies ac
                nullam odio. Gravida sollicitudin viverra ornare pretium etiam
                tortor imperdiet tellus. Id purus etiam nunc hendrerit quam in.
                Dui netus lectus nulla cursus ultrices nulla. Morbi sit in
                gravida fermentum. Non sed lobortis amet eget sed donec.At a
                enim parturient id. Suspendisse ullamcorper fermentum accumsan
                diam tellus. Nibh pretium ultrices scelerisque dolor at etiam
                lectus gravida sed. Sit in turpis suspendisse et aliquam.
                Vulputate sit phasellus proin eget arcu. Enim nec ante velit
                erat nibh nunc amet. Tellus at sit imperdiet non. Cras dictum
                curabitur urna mauris in. Ut dui odio sagittis ut imperdiet
                ultricies mauris ac. A sit id etiam vitae non posuere tristique.
                Morbi sit mi sed nam amet tristique tellus. Sed quam aliquam
                pharetra nunc ipsum mattis. Volutpat pellentesque cras euismod
                habitant sit nibh. Dictum odio at aliquam sed. Orci odio lacinia
                id sem.
              </div>
            </div>
            <div className="homepage__lowerPart-contents-details-right w-[100%] gap-y-[10px] laptop:w-[40%]">
              <div className="homepage-paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                minima blanditiis vero quas nostrum iste distinctio temporibus
                eaque ab rerum, tempora voluptas consequatur quam maiores saepe
                repudiandae perferendis mollitia cum accusantium accusamus
                doloribus aperiam ex. Voluptatibus, necessitatibus. Atque
                perspiciatis reiciendis sapiente laudantium aut accusantium,
                consectetur repellat inventore labore ab sint.
              </div>
              <div className="flex columns-2 gap-x-[10px] mt-[10px]">
                <div className="homepage-pokemon-image pt-[5px] ">
                  <Image
                    className="w-full h-full"
                    src={Image05}
                    alt="image pokemon"
                  />
                </div>
                <div className="homepage-paragraph w-[84%] laptop:w-[60%] 2xl:w-[67%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, repellat dolor quia numquam exercitationem quis
                  quasi sint, soluta ut iste illum ducimus. Doloremque, autem
                  rem magnam perferendis animi et voluptate! Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Repellendus, illo.
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod a enim est asperiores provident autem.
                </div>
              </div>
              <div className="flex columns-2 gap-x-[10px] mt-[10px]">
                <div className="homepage-pokemon-image pt-[5px] ">
                  <Image
                    className="w-full h-full"
                    src={Image01}
                    alt="image pokemon"
                  />
                </div>
                <div className="homepage-paragraph w-[84%] laptop:w-[60%] 2xl:w-[67%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, repellat dolor quia numquam exercitationem quis
                  quasi sint, soluta ut iste illum ducimus. Doloremque, autem
                  rem magnam perferendis animi et voluptate! Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Nemo, non? Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas repellat minima nisi architecto quasi quo!
                </div>
              </div>
              <div className="homepage-paragraph mt-[10px]">
                At a enim parturient id. Suspendisse ullamcorper fermentum
                accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
                etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
                At a enim parturient id. Suspendisse ullamcorper fermentum
                accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
                etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
                Vulputate sit phasellus proin eget arcu. Enim nec ante velit
                erat nibh nunc amet. Ut dui odio sagittis ut imperdiet ultricies
                mauris ac. A sit id etiam vitae non posuere tristique. Morbi sit
                mi sed nam amet tristique tellus. Sed quam aliquam pharetra.
              </div>
            </div>
          </div>
        </div>
       </div>
        
      </div>

{/* mobile design */}
      <div className="homepage__lowerPart px-[10px] my-[60px] min-w-full block md:hidden">
        <div className="homepage__lowerPart-title flex justify-center relative w-[271px] h-[56px] mx-auto">
          <div className="homepage__lowerPart-title-background absolute top-0 left-0 w-full h-full">
            <Image
              className="w-full min-h-full"
              src={brush}
              alt="title background"
            />
          </div>
          <span className="text-center text-large font-bold text-blue">
            Ash & Pikachu Arrive in Pokémon Universe
          </span>
        </div>
        <div className="homepage-paragraph  my-[40px]">
          Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
          ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi
          tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque.
          Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta
          amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit
          pretium lorem elementum. Iaculis sit maecenas sodales mi convallis
          justo aliquam. Tincidunt semper ut ornare vivamus lectus.
        </div>
        <div className="my-[40px]">
          <div className="flex columns-3 gap-[10px] justify-center">
            <div>
              <div className="mobile-image pt-[50px]">
                <Image
                  className="w-full "
                  src={Image04}
                  alt="image pokemon"
                />
              </div>
            </div>
            <div>
              <div className="mobile-image">
                <Image
                  className="w-full h-full"
                  src={Image03}
                  alt="image pokemon"
                />
              </div>
              <div className="mobile-image">
                <Image
                  className="w-full h-full"
                  src={Image02}
                  alt="image pokemon"
                />
              </div>
            </div>
            <div className="pt-[50px]">
              <div className="mobile-image ">
                <Image
                  className="w-full h-full"
                  src={Image05}
                  alt="image pokemon"
                />
              </div>
              <div className="mobile-image">
                <Image
                  className="w-full h-full"
                  src={Image01}
                  alt="image pokemon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-paragraph  my-[40px]">
          Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
          ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi
          tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque.
          Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta
          amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit
          pretium lorem elementum. Iaculis sit maecenas sodales mi convallis
          justo aliquam. Tincidunt semper ut ornare vivamus lectus.
        </div>
      </div>
    </>
  );
}
