import { canUseDOM } from 'vtex.render-runtime';

export function handleEvents(e:any){
    //console.log("handleEvents",e);

    switch(e?.data?.eventName){
        case 'vtex:userData':
            console.log("vtex:userData", e?.data)

        break;

        default:
            break;
    }

}

if (canUseDOM) {
    window.addEventListener('message', handleEvents)

}