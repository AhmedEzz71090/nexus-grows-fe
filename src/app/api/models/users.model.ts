import { Company } from './company.model';
import { Product } from './product.model';


export interface User {
    id: string
    fullName: string
    userRole: string
    userType: string
    userEmail: string
    companyProfile: Company[]
    productList: Product[]
  }