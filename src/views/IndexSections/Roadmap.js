import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Roadmap = () => {
 return (
  <div className='roadmap'>
   <h1>Roadmap</h1>

   <VerticalTimeline>
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="2011 - present"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon=''
    >
     <h3 className="vertical-timeline-element-title">Creative Director</h3>
     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
     <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="2011 - present"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon=''
    >
     <h3 className="vertical-timeline-element-title">Creative Director</h3>
     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
     <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="2011 - present"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon=''
    >
     <h3 className="vertical-timeline-element-title">Creative Director</h3>
     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
     <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="2011 - present"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon=''
    >
     <h3 className="vertical-timeline-element-title">Creative Director</h3>
     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
     <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
     </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
     className="vertical-timeline-element--education"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="2002 - 2006"
     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
     icon=''
    >
     <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
     <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
     <p>
      Creative Direction, Visual Design
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
     icon=''
    />
   </VerticalTimeline>

  </div>
 );
};

export default Roadmap;