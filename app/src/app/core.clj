(ns app.core
  (:require [compojure.core :refer [defroutes GET POST DELETE ANY context]]
            [compojure.route :refer [resources]]
            [compojure.handler :refer [api]]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [org.httpkit.server :refer [run-server]])
  (:gen-class :main true))

(defn all-orders []
  [{:name "black coffee" :quantity 1}
   {:name "green tea" :quantity 1}])

(defn create-order [req]
  (println req)
  {:content-type "application/json"
   :status 201
   :body {:id "some-new-id"}})

(defroutes all-routes
  (resources "/")
  (GET "/orders" []
       {:content-type "application/json"
        :status 201
        :body (all-orders)})
  (POST "/orders" [] create-order))

(def app
  (-> (api all-routes)
      (wrap-json-body)
      (wrap-json-response)))

(defn -main []
  (run-server app {:port 8080}))
