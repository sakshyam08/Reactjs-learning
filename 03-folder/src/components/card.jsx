const Card = (props)=>{
   return( 
   <div className="card">
      <h2>About Me</h2>
       <img src={props.img} alt="" />
      <p>
        Hi, I'm {props.user}. I'm a {props.course} student and a web development
        enthusiast. I enjoy building websites and learning new technologies.
      </p>

      <button>Read More</button>
    </div>
   )
}

export default Card;