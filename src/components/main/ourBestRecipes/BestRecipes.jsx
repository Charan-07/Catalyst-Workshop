import './BestRecipes.css'
import './ResponsiveRecipes.css'
import { RecipePost } from './Post/RecipePost'

import PicRecipe1 from '../../../assets/waffle.jpg'
import PicRecipe2 from '../../../assets/croissant.jpeg'
import PicRecipe3 from '../../../assets/truffle.jpeg'
import PicRecipe4 from '../../../assets/brownie.jpeg'

export const BestRecipes = () => {
    return (
        <section className="bRecipes">
            <div className="recipes" id="menu">
                <div className="infos">
                    <h2>Our Specialities</h2>
                    <p>Ordered and loved by millions</p>
                </div>
                
                <div className="recipe-posts">
                    <RecipePost title='Belgian Waffle with Maple Syrup' 
                    src={PicRecipe1}
                    alt='An image of a waffle'/>

                    <RecipePost title='Croissant'
                    src={PicRecipe2}
                    alt='An image of a croissant'/>

                    <RecipePost title='Choco Truffle Cake'
                    src={PicRecipe3}
                    alt='An image of a choco truffle cake'/>

                    <RecipePost title='Brownie'
                    src={PicRecipe4}
                    alt='An image of a brownie'/>
                </div>
            </div>
        </section>
    )
}