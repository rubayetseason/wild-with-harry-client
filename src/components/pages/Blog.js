import { Accordion } from "flowbite-react";
import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog');
  return (
    <div className="w-11/12 mx-auto">
      <h1 class="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Welcome to Blogs
          </span>
        </h1>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            What are the difference between SQL and NoSQL?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Some differences between SQL vs NoSQL are: <br />
              1. SQL databases are relational, NoSQL databases are
              non-relational. <br />
              2. SQL databases use structured query language and have a
              predefined schema. NoSQL databases have dynamic schemas for
              unstructured data.
              <br />
              3. SQL databases are vertically scalable, while NoSQL databases
              are horizontally scalable.
              <br />
              4. SQL databases are table-based, while NoSQL databases are
              document, key-value, graph, or wide-column stores.
              <br />
              5. SQL databases are better for multi-row transactions, while
              NoSQL is better for unstructured data like documents or JSON.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is JWT, and how does it work?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP) <br />
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. A JWT is a string made up of three parts, separated by
              dots (.), and serialized using base64. Once decoded, you will get
              two JSON strings: The header and the payload. The signature. The
              JOSE (JSON Object Signing and Encryption) header contains the type
              of token — JWT in this case — and the signing algorithm. The
              payload contains the claims. This is displayed as a JSON string,
              usually containing no more than a dozen fields to keep the JWT
              compact. This information is typically used by the server to
              verify that the user has permission to perform the action they are
              requesting. There are no mandatory claims for a JWT, but
              overlaying standards may make claims mandatory.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is the difference between javascript and NodeJS?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              JavaScript is a programming language, which runs in web browsers.
              Whereas Node.js is an interpreter or running environment for
              JavaScript, which holds a lot of requiring libraries and all.
              JavaScript is basically one standard defining programming
              language; it can run any browser with a default browser running
              environment. It is a very strong language normally used for a web
              application on any verification or any specific business
              logic.JavaScript also helps to use Ajax at any time, which helps
              us call any server-side script for given dynamic data based on the
              requirement.Node.js also holds a lot of relative libraries, which
              we normally use in javascript for general purpose programming
              language. It is actually a kind of environment or interpreter that
              can represent JavaScript or run any javascript program. It mainly
              helps us execute some non-blocking operation like some operating
              system special information like certificate details or hardware
              details; we may use node js on the same, which help us do it, and
              JavaScript normal programming will not help us on the same.
              Normally all browsers have a JavaScript engine that helps us to
              run javascript in a web browser. Spider monkey (FireFox),
              JavaScript Core (Safari), V8 (Google Chrome) are some popular
              javascript engine using verities browsers. But node js is using
              the V8 engine directly, with some libraries to do some I/O or
              networking operations. It actually helps us use JavaScript from
              outside of the browser, like creating, writing or executing one
              shell script, some back-end services, or running on hardware.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How does NodeJS handle multiple requests at the same time?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              NodeJS Web Server maintains a limited Thread Pool to provide
              services to client requests. Multiple clients make multiple
              requests to the NodeJS server. NodeJS receives these requests and
              places them into the EventQueue . NodeJS server has an internal
              component referred to as the EventLoop which is an infinite loop
              that receives requests and processes them. This EventLoop is
              single threaded. In other words, EventLoop is the listener for the
              EventQueue. The listener(the event loop) processes the request and
              if it is able to process the request without needing any blocking
              IO operations, then the event loop would itself process the
              request and sends the response back to the client by itself. If
              the current request uses blocking IO operations, the event loop
              sees whether there are threads available in the thread pool, picks
              up one thread from the thread pool and assigns the particular
              request to the picked thread. That thread does the blocking IO
              operations and sends the response back to the event loop and once
              the response gets to the event loop, the event loop sends the
              response back to the client.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blog;
