import { Company } from "./company.model"
import { Product } from "./product.model"


export interface User {
    id: string
    fullName: string
    userRole: UserRole
    userType: UserType
    userEmail: string
    companyProfile: Company[]
    productList: Product[]
  }