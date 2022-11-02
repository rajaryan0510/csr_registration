import  React from 'react';
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import SideBar from '../../Sidebar/SideBar';
import ServiceProviderMaster from './ServiceProviderMaster';
import TransportModeMaster from './TransportModeMaster';
import EquipmentGroupMaster from './EquipmentGroupMaster';
import EquipmentMaster from './EquipmentMaster';
import VehicleMaster from './VehicleMaster';
import DeliveryMaster from './DeliveryMaster';
import SpecialServiceGroupMaster from './SpecialServiceGroupMaster';
import SpecialServiceMaster from './SpecialServiceMaster';


export default function Service() {
    const data = [ 
        {
            label: "Service Provider",
            value: "serviceProvider",
            desc: <ServiceProviderMaster />,
        },
        {
            label: "Transport Mode",
            value: "transportMode",
            desc: <TransportModeMaster />,
        },

        {
            label: "Equipment Group",
            value: "equipmentGroup",
            desc: <EquipmentGroupMaster />,
        },

        {
            label: "Equipment",
            value: "equipment",
            desc: <EquipmentMaster />,
        },
        {
            label: "Vehicle",
            value: "vehicle",
            desc: <VehicleMaster />,
        },
        {
            label: "Delivery",
            value: "delivery",
            desc: <DeliveryMaster />,
        },
        {
            label: "Special Service Group",
            value: "specialServiceGroup",
            desc: <SpecialServiceGroupMaster />,
        },
        {
            label: "Special Service",
            value: "specialService",
            desc: <SpecialServiceMaster />,
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
