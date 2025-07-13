
import { Button } from '../components/ui/Button.tsx';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/ui/Card.tsx';
import { CreateContentModal } from '../components/ui/CreateContentModal.tsx';
import { useState } from 'react';
import { Sidebar } from '../components/ui/Sidebar.tsx';
import { useContent } from '../hooks/useContent.tsx';
import { BACKEND_URL } from '../config.ts';
import axios from "axios";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();


  return <div>
    <Sidebar />
  <div className="p-4 ml-72 min-h-screen bg-gray-100">
     <CreateContentModal  open={modalOpen} onClose={() => {setModalOpen(false);}}/>
      <div className="flex justify-end gap-4 ">
      <Button onClick={()=>{
        setModalOpen(true)
      }} startIcon={<PlusIcon size='lg'/>} size="md" variant="secondary" text="Add Content" />
      <Button onClick={async ()=> {
        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
          share:true
        }, {
          headers: {
            "Authorization": localStorage.getItem("token")
          }
        });
        const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
        alert(shareUrl);
      }} startIcon={<ShareIcon size='lg'/>} size="md" variant="primary" text="Share" />
     </div>

   <div className="flex gap-4 flex-wrap">

    {contents.map(({type,link,title})=> <Card 
      type={type} 
      link={link} 
      title={title} 
      />)}

  
    </div>
  </div>
</div>
  
}

export default Dashboard


//<Card title="Twitter" type="twitter" link="https://x.com/rohitlakh/status/1871168344570855451"/>

//<Card title="Youtube" type="youtube" link="https://www.youtube.com/watch?v=joNu6vgsn1I" />