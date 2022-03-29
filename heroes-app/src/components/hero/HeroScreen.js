import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const {heroeID} = useParams();

  const hero = getHeroById(heroeID);

  if (!hero) {
    return <Navigate to='/'/>
  }

  
  return (
    <div>
        <h1>Hero Screen</h1>
        <p>
          {hero.superhero}
        </p>
    </div>
  )
}
