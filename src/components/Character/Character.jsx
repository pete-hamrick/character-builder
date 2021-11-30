import React from 'react'

export default function Character({ hat, head, shirt, bottom }) {
  return (
    <section>
      <article
        className="hat"
        style={{
          backgroundImage: `url(./${hat}-hat.png)`,
          height: 150,
          //   width: 150,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></article>

      <article
        className="head"
        style={{
          backgroundImage: `url(./${head}-head.png)`,
          height: 150,
          //   width: 150,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></article>

      <article
        className="shirt"
        style={{
          backgroundImage: `url(./${shirt}-shirt.png)`,
          height: 200,
          //   width: 150,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></article>

      <article
        className="bottom"
        style={{
          backgroundImage: `url(./${bottom}-bottom.png)`,
          height: 230,
          //   width: 150,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></article>
    </section>
  )
}
