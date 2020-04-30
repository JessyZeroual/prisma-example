 ### Connexion du client React à Graphql avec Apollo


Sources :  https://www.apollographql.com/docs/react/essentials/get-started

------------------------------------------------------
- Installer les packages nécessaires

         
        npm install apollo-boost react-apollo graphql

             

------------------------------------------------------

- Crée une nouveau client avec apollo-boost dans un nouveau fichier a partir du dossier src ( appli React )

                  
        mkdir apollo
        cd apollo
        touch client.js

------------------------------------------------------

- Dans le fichier client/src/apollo/client.js

                  
       import ApolloClient from "apollo-boost";

        export const client = new ApolloClient({
        uri: "http://localhost:4000"
        });


------------------------------------------------------



- Envelopper notre appli react par ApolloProvider

        import  React  from  "react";
		import { ApolloProvider } from  "react-apollo";
		import { client } from  "./apollo/client";
		import  "./App.css";

  

		const  App = () => (
		<ApolloProvider  client={client}>
		<div>
		<h2>My first Apollo app 🚀</h2>
		</div>
		</ApolloProvider>
		);

		export  default  App;


------------------------------------------------------