import ProfileCard from '../../components/ProfileCard/ProfileCard'



const ProfileDetails = (props) => {
  return (
    <main>
      {props.sets.map(set => 
        <>
        <ProfileCard user={props.user} key={set._id} set={set} />
        </>
        )}
    </main>
  )
}


export default ProfileDetails