import React from 'react'
import './Character.css'

export default function Character({ hat, head, shirt, bottom }) {
  return (
    <article className="character">
      <section
        className="hat"
        style={{
          backgroundImage: `url(./${hat}-hat.png)`,
          height: 150,
          //   width: 150,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></section>

      <section
        className="head"
        style={{
          backgroundImage: `url(./${head}-head.png)`,
          height: 150,
          //   width: 150,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></section>

      <section
        className="shirt"
        style={{
          backgroundImage: `url(./${shirt}-shirt.png)`,
          height: 200,
          //   width: 150,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></section>

      <section
        className="bottom"
        style={{
          backgroundImage: `url(./${bottom}-bottom.png)`,
          height: 230,
          //   width: 150,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></section>
    </article>
  )
}
