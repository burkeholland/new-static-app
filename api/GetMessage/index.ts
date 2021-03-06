import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // return a message

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { message: "Hello World" } 
    };

};

export default httpTrigger;