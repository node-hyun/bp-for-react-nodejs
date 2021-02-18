import axios from 'axios';
import React, { useEffect } from 'react';


function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => console.log(response.data))
    }, []); 

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        }}>
            {/* LandingPage 랜딩 페이지 */}
            시작 페이지
        </div>
    )
}

export default LandingPage
