import React from 'react'
import Card from './component/Card'

const App = () => {

  const jobs = [
  {
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type1: "Part Time",
    type2: "Full Time",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    logo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    companyName: "Google",
    posted: "2 days ago",
    title: "Frontend Developer",
    type1: "Remote",
    type2: "Full Time",
    salary: "$140/hr",
    location: "Bangalore, India",
  },
  {
    logo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
    companyName: "Microsoft",
    posted: "1 week ago",
    title: "React Developer",
    type1: "Hybrid",
    type2: "Full Time",
    salary: "$135/hr",
    location: "Hyderabad, India",
  },
  {
    logo: "https://i.pinimg.com/1200x/dd/e9/e0/dde9e02b9559fd7622804d004f477568.jpg",
    companyName: "Adobe",
    posted: "3 days ago",
    title: "Product Designer",
    type1: "Full Time",
    type2: "Senior Level",
    salary: "$125/hr",
    location: "Pune, India",
  },
  {
    logo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
    companyName: "Netflix",
    posted: "Today",
    title: "UI Designer",
    type1: "Remote",
    type2: "Contract",
    salary: "$150/hr",
    location: "Delhi, India",
  },
  {
    logo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    companyName: "Meta",
    posted: "4 days ago",
    title: "Frontend Engineer",
    type1: "Full Time",
    type2: "Mid Level",
    salary: "$145/hr",
    location: "Gurgaon, India",
  },
  {
    logo: "https://i.pinimg.com/1200x/14/8b/28/148b28a3992349e8db92184c65d24bbd.jpg",
    companyName: "Spotify",
    posted: "6 days ago",
    title: "Web Developer",
    type1: "Remote",
    type2: "Internship",
    salary: "$80/hr",
    location: "Noida, India",
  },
  {
    logo: "https://i.pinimg.com/736x/1f/e5/ee/1fe5ee5fee834b1f5f9a0996be6d6567.jpg",
    companyName: "Airbnb",
    posted: "Yesterday",
    title: "UX Researcher",
    type1: "Hybrid",
    type2: "Full Time",
    salary: "$130/hr",
    location: "Chennai, India",
  },
  {
    logo: "https://i.pinimg.com/1200x/29/92/5a/29925ae71627c8ba50710db01fcd2c57.jpg",
    companyName: "Tesla",
    posted: "2 weeks ago",
    title: "Software Engineer",
    type1: "On Site",
    type2: "Full Time",
    salary: "$160/hr",
    location: "Ahmedabad, India",
  },
  {
    logo: "https://i.pinimg.com/736x/8a/15/b6/8a15b646a6856d20854c2ac22623d971.jpg",
    companyName: "LinkedIn",
    posted: "1 day ago",
    title: "React JS Developer",
    type1: "Remote",
    type2: "Full Time",
    salary: "$155/hr",
    location: "Kolkata, India",
  },
];

  return (
    <div className='parent'>
      {jobs.map((ele)=>{
        return <Card company ={ele.companyName} posted ={ele.posted} title={ele.title} type1 = {ele.type1} type2 = {ele.type2} salary={ele.salary} location = {ele.location} logo = {ele.logo}/>
      })}
    </div>
  )
}

export default App
