import styled from 'styled-components';
import header from '../images/header.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';
import food4 from '../images/food4.jpg';

const Home = () => {
    return (
    <>
        <HomeSection>
            <div>
                <h1>Perfect Potluck</h1>
                <button>Create a Meal</button>
            </div>
        </HomeSection>
        <AboutSection >
            <div>
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, consequuntur exercitationem! Officiis vel magnam ipsum eius incidunt illo minima nostrum eum harum! Blanditiis tenetur odio corrupti consequatur, reiciendis dolorem quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, porro? Repellat mollitia, qui eveniet ab voluptatibus repellendus, quod dolore minus at, illo exercitationem odio maiores alias laborum atque expedita eius!</p>
            </div>
        </AboutSection>
        <ShopSection>
            <h2>Our Plants</h2>
            <ContainerSection>
                <FoodIMG>
                    <div>
                        <img src = { food2 } />
                    </div>  
                </FoodIMG>                  
                <TextSection>
                    <div>
                        <h2>Food 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum blanditiis voluptates est, ipsum odio repudiandae eligendi numquam esse autem beatae sequi natus, omnis, veritatis magnam atque iusto nesciunt similique.</p>
                        <button>LEARN MORE</button>
                    </div>
                </TextSection>
                <TextSection>
                    <div>
                        <h2>Food 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas nobis debitis inventore ratione quasi porro repudiandae, tempora mollitia doloremque aliquam vero accusantium maxime consequatur libero quas reprehenderit esse sint?</p>
                        <button>LEARN MORE</button>
                    </div>
                </TextSection>
                <FoodIMG>
                    <div>
                        <img src = { food3 } />
                    </div>  
                    
                </FoodIMG>
                <FoodIMG>
                    <div>
                        <img src = { food4 } />
                    </div>  
                </FoodIMG>                  
                <TextSection>
                    <div>
                        <h2>Food 4</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis architecto assumenda eligendi ea optio recusandae illo cum nam quis vitae, iure laboriosam quod minima maiores! Nihil doloribus error rem.</p>
                        <button>LEARN MORE</button>
                    </div>
                </TextSection>
            </ContainerSection>
        </ShopSection>
    </>        
    )
}

export default Home;

const HomeSection= styled.div`
    background-image:url(${header});
    background-size:cover;
    background-repeat:no-repeat;
    background-color:#a82342;
    height:90vh;
    width: 100%;
    
    display:flex;
    justify-content: center;
    align-items: center;
    
    text-align:center;
    background-position: bottom;
        button {
            color:#266035;
            border:2px solid #266035;
        }        
`

const AboutSection = styled.div`    
    background-position: center;         
    display:flex;
    justify-content: flex-end;
    align-items:center;
        
`
const ShopSection = styled.div`
    padding-bottom:0;  
    background-color:#4f9c5b;          
`
const ContainerSection = styled.div`
    display:flex;    
    flex-direction: row;
    flex-wrap:wrap;        
`
const FoodIMG = styled.div`
    width:40%; 
    padding:3%;        
`
const TextSection = styled.div`
    width:40%;         
    display:flex;
    justify-content: center;
    align-items: center;
    padding:6%;
    text-align:center; 
        div {
            width:50%
        }  
        button{
            background-color:#266035;
            color:#fff;
        }    
`