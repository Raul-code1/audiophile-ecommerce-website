import { Routes,Route,Navigate } from "react-router-dom";

import { HeadPhonesPage, HomePage,EarphonesPage,SpeakersPage, ProductDetail, Checkout  } from "../pages";


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomePage /> }  />
        <Route path="/headphones" element={ <HeadPhonesPage  />  }  />
        <Route path="/speakers" element={ <SpeakersPage  />  }  />
        <Route path="/earphones" element={ <EarphonesPage  />  }  />
        <Route path="/product/:name" element={ <ProductDetail />    }  />
        <Route path="/*" element={ <Navigate to='/' /> }  />
        <Route path="/checkout" element={ <Checkout />    }  />
    </Routes>

  )
}
