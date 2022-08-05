import { Box,Text,Spacer,Tag,Flex } from '@chakra-ui/react';
import {BsCalendarDate} from 'react-icons/bs'


export function LaunchItem(launch){
  return(
    <Box
    bg='gray.100' 
    p={4} 
    m={4} 
    borderRadius='lg' >
     <Flex display='flex'>
       <Text fontSize='2xl'>
         Mission <strong> {launch.mission_name} </strong> ({launch.launch_year})
       </Text>
       <Spacer />
       <Tag p={4} colorScheme={launch.launch_success ? 'green' : 'red'}>
         {launch.launch_success ? 'Success' : 'Failure'}
       </Tag>
     </Flex>
     <Flex>
       <BsCalendarDate />
       <Text fontSize='sm'>
         {launch.launch_date_local.split('T')[0]}
       </Text>
     </Flex>
    </Box>
  )
}