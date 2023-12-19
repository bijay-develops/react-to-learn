import React from 'react'

function card({username, btnText = "Hire Me!"}) { /* If btnText is passed from App.jsx then use that value. If the value of btnText hasn't been passed from app.jsx then, use "Hire Me!" */
  console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/291898125_1479465415856980_6911077526514162129_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=783fdb&_nc_ohc=PI0NNqkswNMAX-exoda&_nc_ht=scontent.fktm10-1.fna&oh=00_AfBB1KFMHpgbwN0nqP8C9RX1iN5SEImS62_ur5n7KItU5A&oe=65859AEF"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Developers' Moon to shine Devs!
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText} →
    </button>
  </div>
</div>

  )
}

export default card