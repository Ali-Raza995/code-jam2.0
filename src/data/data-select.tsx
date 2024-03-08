export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
  export const colourOptions: readonly ColourOption[] = [
    { value: 'webdev', label: 'WEB DEV', color: '#00B8D9', isFixed: true },
    { value: 'blockchain', label: 'BLOCKCHAIN DEV', color: '#0052CC', isDisabled: true },
    { value: 'ai', label: 'AI ANALYST', color: '#5243AA' },
    { value: 'dataanalyst', label: 'Data Analyst', color: '#FF5630', isFixed: true },


  ];
  
  export interface FlavourOption {
    readonly value: string;
    readonly label: string;
    readonly rating: string;
  }
  

  
  export interface StateOption {
    readonly value: string;
    readonly label: string;
  }
  

  

  

  
  // let bigOptions = [];
  // for (let i = 0; i < 10000; i++) {
  // 	bigOptions = bigOptions.concat(colourOptions);
  // }
  

  

  