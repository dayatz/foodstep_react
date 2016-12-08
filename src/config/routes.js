import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Root from '../pages/root.js'
import Home from '../pages/home.js'

import Recipes from '../pages/recipes.js'
import RecipeCreate from '../pages/recipe_create.js' 
import RecipeFavorites from '../pages/recipe_favorites.js'
import RecipeMe from '../pages/recipe_me.js'
import Recipe from '../pages/recipe.js'

import User from '../pages/user.js'
import UserRecipes from '../pages/user_recipes.js'
import UserFavorites from '../pages/user_favorites.js'
import UserFollowers from '../pages/user_followers.js'

import Login from '../pages/login.js'


const routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Root} name='root'>
            <IndexRoute name='home' component={Home} />

            <Route path='recipes' component={Recipes} name='recipe-list' />
            <Route path='recipes/create' component={RecipeCreate} name='recipe-create' />
            <Route path='recipes/favorites' component={RecipeFavorites} name='recipe-favorites' />
            <Route path='recipes/me' component={RecipeMe} name='recipe-me' />
            <Route path='recipes/:id' component={Recipe} name='recipe-detail' />

            <Route path='user/:id' component={User} name='user-detail-container'>
                <IndexRoute component={UserRecipes} name='user-detail' />
                <Route path='favorites' component={UserFavorites} name='user-favorites' />
                <Route path='followers' component={UserFollowers} name='user-followers' />
            </Route>
        </Route>
        <Route path='login' component={Login} />
    </Router>
)

export default routes