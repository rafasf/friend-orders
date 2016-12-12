(defproject app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha4"]
                 [http-kit "2.2.0"]
                 [javax.servlet/servlet-api "2.5"]
                 [ring/ring-core "1.5.0"]
                 [ring/ring-defaults "0.1.1"]
                 [ring/ring-json "0.4.0"]
                 [compojure "1.5.1"]]
  :main ^:skip-aot app.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
