import React from "react";
function UpdatePost({})
{
return(<>
<button onClick={()=>setInUpdate}>🖋</button>
{inUpdate&&<button onClick={UpdatePost()}>✔</button>}</>)
}export default UpdatePost