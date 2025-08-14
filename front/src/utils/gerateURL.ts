
const generateSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, "-");}

export const generateUrl = (id: string | number, basePath:string , name?: string ) => {
    
    const Slug =  name && name.trim().length > 0 ? generateSlug(name) : undefined;
    
    return Slug? `${basePath}/${id}/${Slug}`: `${basePath}/${id}`;
  };
