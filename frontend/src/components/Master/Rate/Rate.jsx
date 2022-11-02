import  React from 'react';
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import SideBar from '../../Sidebar/SideBar';
import AccessorialsCodeMaster from './AccessorialsCodeMaster';
import AccessorialCostMaster from './AccessorialCostMaster';
import RatesMaster from './RatesMaster';
import RateVersionMaster from './RateVersionMaster';
import RateRecordMaster from './RateRecordMaster';
import RateServiceMaster from './RateServiceMaster';
import RateofferingTypeId from './RateofferingTypeId';
import RateOfferingMaster from './RateOfferingMaster';



export default function Rate() {
    const data = [ 
        {
            label: "Accessorials Code",
            value: "accessorialsCode",
            desc: <AccessorialsCodeMaster />,
        },
        {
            label: "Accessorial Cost",
            value: "accessorialCost",
            desc: <AccessorialCostMaster />,
        },

        {
            label: "Rates",
            value: "rates",
            desc: <RatesMaster />,
        },

        {
            label: "Rate Version",
            value: "rateVersion",
            desc: <RateVersionMaster />,
        },
        {
            label: "Rate Record",
            value: "rateRecord",
            desc: <RateRecordMaster />,
        },
        {
            label: "Rate Service",
            value: "rateService",
            desc: <RateServiceMaster />,
        },
        {
            label: "Rateoffering Type ID",
            value: "rateofferingTypeId",
            desc: <RateofferingTypeId />,
        },
        {
            label: "Rate Offering",
            value: "rateOffering",
            desc: <RateOfferingMaster />,
        },
    ];

    return (
        <SideBar>
            <div className='lg:relative ml-12'>
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
