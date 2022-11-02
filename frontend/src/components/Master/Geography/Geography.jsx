import  React from 'react';
import LocationMaster from './LocationMaster';
import CountryMaster from './CountryMaster';
import CountryZoneMaster from './CountryZoneMaster';
import RegionMaster from './RegionMaster';
import ProvinceMaster from './ProvienceMaster';
import SPLCMaster from './SPLCMaster';
import LaneMaster from './LaneMaster';
import TimeMaster from './TimeMaster';
import AddressMaster from './AddressMaster';
import CalenderMaster from './CalenderMaster';

import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import SideBar from '../../Sidebar/SideBar';


export default function Geography() {
    const data = [ 
        {
            label: "Location",
            value: "location",
            desc: <LocationMaster />,
        },
        {
            label: "Country",
            value: "country",
            desc: <CountryMaster/>,
        },

        {
            label: "Country Zone",
            value: "countryZone",
            desc: <CountryZoneMaster/>,
        },

        {
            label: "Region",
            value: "region",
            desc: <RegionMaster />,
        },
        {
            label: "State/Province",
            value: "province",
            desc: <ProvinceMaster />,
        },
        {
            label: "SPLC",
            value: "splc",
            desc: <SPLCMaster />,
        },
        {
            label: "Lane",
            value: "lane",
            desc: <LaneMaster />,
        },
        {
            label: "Time",
            value: "time",
            desc: <TimeMaster />,
        },
        {
            label: "Address",
            value: "address",
            desc: <AddressMaster />,
        },
        {
            label: "Calender",
            value: "calender",
            desc: <CalenderMaster />,
        },
    ];

    return (
        <SideBar>
            <div className='lg:relative ml-12 md:ml-4'>
                <Tabs value="group" className=' my-2 w-full grid md:grid-flow-row '>
                    <TabsHeader className='grid md:grid-flow-col md:w-auto  '>
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value} className="md:px-6">
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>

        </SideBar>
    );
}