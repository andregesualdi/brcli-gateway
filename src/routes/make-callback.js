export default (controller) => async (req, res) => {
    const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
        ip: req.ip,
        method: req.method,
        path: req.path,
        headers: {
          ...req.headers
        },
      };

      controller(httpRequest)
        .then((httpResponse) => {
            res.set('Content-Type', 'application/json');
            res.type('json');
            res.status(200).send(httpResponse);
        })
        .catch((e) => {
            if (e.code === "BRCLI404") {
                res.status(404).send({
                    success: false,
                    code: e.code,
                    status: 404
                });
            } else if (e === "Forbidden") {
                res.status(403).send({
                    success: false,
                    code: 403,
                    error: {
                        description: e.message ? e.message : e
                    }
                });
            } else if (e === "Unauthorized") {
                res.status(401).send({
                    success: false,
                    code: 401,
                    error: {
                        description: e.message ? e.message : e
                    }
                });
            } else {
                res.status(500).send({
                    success: false,
                    code: 500,
                    error: {
                        description: e
                    }
               });
            }
        });
};