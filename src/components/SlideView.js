import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const Wrapper = styled.div`
    widht:100%;
    height:100%;
    padding 32px;
`;

const Page = styled.div`
    widht:100%;
    padding: 5px;
    font-family: 'Grenze Gotisch', cursive;

`;

export default class SlideView extends React.Component {
    render() {
        return(
           <Wrapper>
               <Slider
                    speed={500}
                    sliderToShow={1}
                    slidesToScroll={1}
                    infinite={false}
                    dots={true}
               >
                <Page >
                    <h3>John Doe 08/08/2019</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi recusandae voluptas praesentium deserunt velit, 
                    delectus, asperiores facere aspernatur dolorem magnam tenetur, sint sed hic iure molestias deleniti explicabo 
                    saepe. Nostrum quidem nisi veniam aspernatur voluptatibus id dolor, commodi vero iste nam modi corrupti cupiditate 
                    dolores possimus accusamus repellat dolore similique consectetur? Et saepe laudantium illum ea illo? Ipsum cumque 
                    magni atque incidunt fuga quas deleniti, doloribus repellat error at corrupti inventore corporis illum exercitationem 
                    esse dolorum asperiores fugiat debitis quia. Illum ratione, numquam modi quod iure placeat cum, quam excepturi 
                    similique dolore ad doloribus ullam accusantium quasi laudantium natus iste.
                    </p>
                </Page>
                <Page>
                    <h3>Carlos Smith 01/02/2020</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi recusandae voluptas praesentium deserunt velit, 
                    delectus, asperiores facere aspernatur dolorem magnam tenetur, sint sed hic iure molestias deleniti explicabo 
                    saepe. Nostrum quidem nisi veniam aspernatur voluptatibus id dolor, commodi vero iste nam modi corrupti cupiditate 
                    dolores possimus accusamus repellat dolore similique consectetur? Et saepe laudantium illum ea illo? Ipsum cumque 
                    magni atque incidunt fuga quas deleniti, doloribus repellat error at corrupti inventore corporis illum exercitationem 
                    esse dolorum asperiores fugiat debitis quia. Illum ratione, numquam modi quod iure placeat cum, quam excepturi 
                    similique dolore ad doloribus ullam accusantium quasi laudantium natus iste.
                    </p>
                </Page>
                <Page>
                    <h3>Tom Goodman 05/03/2020</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi recusandae voluptas praesentium deserunt velit, 
                    delectus, asperiores facere aspernatur dolorem magnam tenetur, sint sed hic iure molestias deleniti explicabo 
                    saepe. Nostrum quidem nisi veniam aspernatur voluptatibus id dolor, commodi vero iste nam modi corrupti cupiditate 
                    dolores possimus accusamus repellat dolore similique consectetur? Et saepe laudantium illum ea illo? Ipsum cumque 
                    magni atque incidunt fuga quas deleniti, doloribus repellat error at corrupti inventore corporis illum exercitationem 
                    esse dolorum asperiores fugiat debitis quia. Illum ratione, numquam modi quod iure placeat cum, quam excepturi 
                    similique dolore ad doloribus ullam accusantium quasi laudantium natus iste.
                    </p>
                </Page>

               </Slider>
           </Wrapper>
        )
    }
}