/********************************************
    This is an interfaces

    An interface is a user-defined data-type

    It describes a format of data that may be used in multiple places 

    Allows the sharing of data format between components, services, etc.

    Suppose the same object layout was required in 20 different places

    You could code the object layout in each of those 20 places 
    
    --OR--

    Put the object layout in an interface and every place uses the interface


 *******************************************/

// This interface describes a MoviesInfo Object
// We export it so others can use it
export interface MoviesInfo {
    title : string;
    releaseYear : number;
    director : string;
}